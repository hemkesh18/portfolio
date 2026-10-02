import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { portfolioData } from '../src/data/portfolioData.js';
import fs from 'node:fs';
import path from 'node:path';

describe('Portfolio Data Integrity', () => {
  test('personal profile contains verified identity', () => {
    assert.equal(portfolioData.personal.name, 'Cuddapah Hemkesh');
    assert.equal(portfolioData.personal.cgpa, '9.05 / 10.0');
    assert.equal(portfolioData.personal.role, 'Software engineer (full-stack + ML)');
    assert.ok(portfolioData.personal.tagline.includes('AI-backed systems'));
    assert.ok(portfolioData.personal.proofLine.includes('Preflight'));
  });

  test('preflight flagship data matches verified repo benchmarks', () => {
    const { preflight } = portfolioData;
    assert.equal(preflight.title, 'Preflight');
    assert.ok(preflight.scenario.includes('Kestrel Pay'));

    // Thresholds
    assert.equal(preflight.thresholds[0].classification, 'LOW');
    assert.equal(preflight.thresholds[0].action, 'PASS');
    assert.equal(preflight.thresholds[1].classification, 'MEDIUM');
    assert.equal(preflight.thresholds[1].action, 'WARN');
    assert.equal(preflight.thresholds[2].classification, 'HIGH');
    assert.equal(preflight.thresholds[2].action, 'BLOCK');

    // Empirical results
    const repeatComp = preflight.results.comparison.find((c) =>
      c.metric.includes('Repeat incidents')
    );
    assert.ok(repeatComp);
    assert.ok(repeatComp.memoryOn.includes('4 / 9'));
    assert.ok(repeatComp.memoryOff.includes('1 / 9'));

    const falseAlarmComp = preflight.results.comparison.find((c) =>
      c.metric.includes('False alarms')
    );
    assert.ok(falseAlarmComp);
    assert.ok(falseAlarmComp.memoryOn.includes('5 / 111'));
    assert.ok(falseAlarmComp.memoryOff.includes('5 / 111'));
  });

  test('simulator presets contain valid cached ground truth without API dependency', () => {
    const { simulatorPresets } = portfolioData.preflight;
    assert.ok(simulatorPresets.length >= 5);
    for (const p of simulatorPresets) {
      assert.ok(['PASS', 'WARN', 'BLOCK'].includes(p.decision));
      assert.ok(typeof p.riskScore === 'number');
      assert.ok(p.riskScore >= 0.0 && p.riskScore <= 1.0);
      assert.ok(p.runbook && p.runbook.length > 5);
      assert.ok(Array.isArray(p.evidenceIds));
    }
  });

  test('skills are grouped into 4 domain cards with verified project usage', () => {
    const categories = portfolioData.skills.map((s) => s.category);
    assert.deepEqual(categories, [
      'Languages',
      'Backend and Data',
      'Frontend',
      'AI and Agents',
    ]);

    const languages = portfolioData.skills.find((s) => s.category === 'Languages').items.map((i) => i.name);
    assert.deepEqual(languages, ['Java', 'Python', 'JavaScript', 'SQL', 'C', 'C++']);

    const backend = portfolioData.skills.find((s) => s.category === 'Backend and Data').items.map((i) => i.name);
    assert.deepEqual(backend, ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Sequelize', 'EJS']);

    const frontend = portfolioData.skills.find((s) => s.category === 'Frontend').items.map((i) => i.name);
    assert.deepEqual(frontend, ['React', 'Tailwind CSS', 'HTML/CSS', 'HTML5', 'Bootstrap']);

    const ai = portfolioData.skills.find((s) => s.category === 'AI and Agents').items.map((i) => i.name);
    assert.deepEqual(ai, ['Groq LLM API', 'Vectorize Hindsight memory']);

    // Check Strong and Familiar markers
    const allSkills = portfolioData.skills.flatMap((s) => s.items);
    const strong = allSkills.filter((i) => i.level === 'Strong').map((i) => i.name);
    assert.deepEqual(strong, ['Java', 'Python', 'JavaScript', 'SQL', 'Node.js', 'Express', 'PostgreSQL', 'React']);
    const familiar = allSkills.filter((i) => i.level === 'Familiar').map((i) => i.name);
    assert.deepEqual(familiar, ['C', 'C++']);
  });

  test('zero em dashes or en dashes across portfolio source text', () => {
    const filesToScan = [
      'src/data/portfolioData.js',
      'src/components/Hero.jsx',
      'src/components/PreflightSection.jsx',
      'src/components/GateSimulator.jsx',
      'src/components/Projects.jsx',
      'src/components/Skills.jsx',
      'src/components/Timeline.jsx',
      'src/components/Achievements.jsx',
      'src/components/Contact.jsx',
      'src/components/Footer.jsx',
    ];

    const emDash = '\u2014';
    const enDash = '\u2013';

    for (const file of filesToScan) {
      const fullPath = path.resolve(process.cwd(), file);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        assert.ok(!content.includes(emDash), `Found em dash in ${file}`);
        assert.ok(!content.includes(enDash), `Found en dash in ${file}`);
      }
    }
  });
});
