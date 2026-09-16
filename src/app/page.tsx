'use client';

import { useState } from 'react';
import Link from 'next/link';

  type Dosha = 'Vata' | 'Pitta' | 'Kapha';
  type Answer = { id: string; label: string; dosha: Dosha; detail: string };

  const questions: { id: string; number: string; title: string; prompt: string; answers: Answer[] }[] = [
    { id: 'build', number: '01', title: 'Natural build', prompt: 'Which description feels most like your natural body frame?', answers: [
      { id: 'vata', label: 'Light & slender', dosha: 'Vata', detail: 'Lean frame, quick movements, variable appetite' },
      { id: 'pitta', label: 'Medium & athletic', dosha: 'Pitta', detail: 'Moderate frame, warm body, steady muscle tone' },
      { id: 'kapha', label: 'Broad & solid', dosha: 'Kapha', detail: 'Sturdy frame, slower pace, natural endurance' },
    ] },
    { id: 'energy', number: '02', title: 'Energy rhythm', prompt: 'How does your energy tend to move through a typical day?', answers: [
      { id: 'vata', label: 'Bursts of inspiration', dosha: 'Vata', detail: 'Fast starts with changing energy levels' },
      { id: 'pitta', label: 'Focused & consistent', dosha: 'Pitta', detail: 'Driven momentum with a strong sense of purpose' },
      { id: 'kapha', label: 'Slow to start, lasting', dosha: 'Kapha', detail: 'Gentle beginning with excellent staying power' },
    ] },
    { id: 'mind', number: '03', title: 'Mind & mood', prompt: 'When life gets busy, which pattern sounds most familiar?', answers: [
      { id: 'vata', label: 'I feel scattered', dosha: 'Vata', detail: 'Creative and adaptable, but easily overstimulated' },
      { id: 'pitta', label: 'I become intense', dosha: 'Pitta', detail: 'Decisive and sharp, with a low tolerance for friction' },
      { id: 'kapha', label: 'I seek comfort', dosha: 'Kapha', detail: 'Steady and compassionate, preferring familiar rhythms' },
    ] },
  ];

  const profiles: Record<Dosha, { symbol: string; subtitle: string; color: string; advice: string[] }> = {
    Vata: { symbol: '✦', subtitle: 'Air + space · movement & imagination', color: 'lilac', advice: ['Choose warm, grounding meals at regular times.', 'Build gentle routines with room for creative movement.', 'Prioritise rest, quiet, and a consistent bedtime.'] },
    Pitta: { symbol: '◈', subtitle: 'Fire + water · clarity & transformation', color: 'coral', advice: ['Make room for cooling, hydrating foods and pauses.', 'Balance ambition with time in nature and play.', 'Protect your eyes and mind from too much screen heat.'] },
    Kapha: { symbol: '●', subtitle: 'Earth + water · steadiness & nourishment', color: 'sage', advice: ['Wake early and begin the day with energising movement.', 'Prefer light, warm meals with bright seasonal flavours.', 'Keep variety in your week to invite fresh momentum.'] },
  };

export default function Home() {
    const [answers, setAnswers] = useState<Record<string, Dosha>>({});
    const [result, setResult] = useState<Dosha | null>(null);
    const [activeStep, setActiveStep] = useState(0);

    function choose(questionId: string, dosha: Dosha) {
      setAnswers((current) => ({ ...current, [questionId]: dosha }));
      if (activeStep < questions.length - 1) setActiveStep(activeStep + 1);
    }

    function classify() {
      const scores: Record<Dosha, number> = { Vata: 0, Pitta: 0, Kapha: 0 };
      Object.values(answers).forEach((dosha) => { scores[dosha] += 1; });
      const winner = (Object.keys(scores) as Dosha[]).sort((a, b) => scores[b] - scores[a])[0];
      setResult(winner);
      document.getElementById('result')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function reset() { setAnswers({}); setResult(null); setActiveStep(0); }

    const answered = Object.keys(answers).length;
    const profile = result ? profiles[result] : null;

    return <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation"><Link className="brand" href="/"><span className="brand-mark">P</span><span><strong>prakruti</strong><small>an IKS knowledge system</small></span></Link><div className="nav-links"><Link href="/">Classifier</Link><Link href="/method">How it works</Link><Link href="/about">About IKS</Link></div><a className="nav-cta" href="#classify">Begin assessment <span>↗</span></a></nav>
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> AYURVEDA · RULE-BASED EXPERT SYSTEM</p><h1>Read the rhythm<br /><em>within you.</em></h1><p className="hero-intro">Explore your Ayurvedic constitution through a transparent, educational classification system inspired by the three doshas.</p><a className="primary-button" href="#classify">Discover your prakruti <span>↓</span></a><p className="micro-note">Takes 2 minutes · No account required</p></div><div className="hero-art" aria-label="Abstract illustration of the three doshas"><div className="sun-orbit orbit-one" /><div className="sun-orbit orbit-two" /><div className="sun-orbit orbit-three" /><div className="hero-sun">P</div><div className="orbit-label label-vata"><i>✦</i><span>Vata<small>motion</small></span></div><div className="orbit-label label-pitta"><i>◈</i><span>Pitta<small>fire</small></span></div><div className="orbit-label label-kapha"><i>●</i><span>Kapha<small>earth</small></span></div></div></section>
      <section className="signal-strip"><div><strong>01</strong><span>Ancient principles</span></div><div><strong>03</strong><span>Dosha archetypes</span></div><div><strong>09</strong><span>Rule inputs</span></div><p>Knowledge traditions, made legible <span>→</span></p></section>
      <section className="orientation-section"><div><p className="eyebrow"><span className="eyebrow-line" /> BEFORE YOU BEGIN</p><h2>What is<br /><em>prakruti?</em></h2></div><div><p className="orientation-copy">In Ayurveda, prakruti describes a person&apos;s natural constitution: a changing balance of qualities that can influence energy, temperament, and everyday rhythms.</p><p className="orientation-note"><strong>Think of this as a learning tool.</strong> There are no right or wrong answers. Choose what describes your usual pattern, then use the result as a prompt for reflection, not a medical diagnosis.</p></div></section>
      <section className="dosha-guide"><div className="guide-heading"><p className="eyebrow"><span className="eyebrow-line" /> THE THREE DOSHAS</p><h2>Three lenses<br />for observing <em>balance.</em></h2></div><div className="dosha-cards"><article className="dosha-vata"><span className="dosha-symbol">✦</span><h3>Vata</h3><p>Movement, creativity, and adaptability.</p><small>Air + space</small></article><article className="dosha-pitta"><span className="dosha-symbol">◈</span><h3>Pitta</h3><p>Focus, transformation, and clear direction.</p><small>Fire + water</small></article><article className="dosha-kapha"><span className="dosha-symbol">●</span><h3>Kapha</h3><p>Stability, nourishment, and steady endurance.</p><small>Earth + water</small></article></div></section>
      <section className="classifier-section" id="classify"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> THE CLASSIFIER</p><h2>A conversation<br />with your <em>nature.</em></h2><p>Choose the answer that feels most natural, not aspirational. The system weighs each response against a simple, visible rule set.</p></div><div className="progress-row"><span>Assessment progress</span><div className="progress-track"><i style={{ width: `${(answered / questions.length) * 100}%` }} /></div><strong>{String(answered).padStart(2, '0')} / 03</strong></div><div className="question-grid">{questions.map((question, index) => <article className={`question-card ${activeStep === index ? 'is-active' : ''}`} key={question.id}><div className="question-top"><span>{question.number}</span><small>{index === activeStep ? 'CURRENT' : answers[question.id] ? 'ANSWERED' : 'UP NEXT'}</small></div><h3>{question.title}</h3><p>{question.prompt}</p><div className="answer-list">{question.answers.map((answer) => <button className={answers[question.id] === answer.dosha ? 'selected' : ''} key={answer.id} onClick={() => choose(question.id, answer.dosha)}><span className="answer-radio" /><span><b>{answer.label}</b><small>{answer.detail}</small></span></button>)}</div></article>)}</div><div className="classifier-actions"><button className="text-button" onClick={reset}>↺ Reset answers</button><button className="primary-button classify-button" onClick={classify} disabled={answered < questions.length}>Classify my prakruti <span>→</span></button></div></section>
      <section className="result-section" id="result"><div className="result-intro"><p className="eyebrow"><span className="eyebrow-line" /> YOUR READING</p><h2>{result ? 'Your primary dosha is' : 'Your result will appear here'}</h2><p>{result ? 'A starting point for self-observation, grounded in the answers you shared.' : 'Complete the three prompts above to reveal a clear, explainable result.'}</p></div>{result && profile ? <div className={`result-card ${profile.color}`}><div className="result-main"><span className="result-symbol">{profile.symbol}</span><div><p className="result-kicker">PRIMARY CONSTITUTION</p><h3>{result}</h3><p>{profile.subtitle}</p></div><div className="confidence"><strong>{Math.round((Object.values(answers).filter((answer) => answer === result).length / 3) * 100)}%</strong><span>rule match</span></div></div><div className="result-details"><div><p className="detail-label">Why this result</p><p>Your responses formed the strongest pattern around <strong>{result}</strong> qualities. In this simplified model, each aligned answer contributes one point to the final classification.</p></div><div><p className="detail-label">Try exploring</p>{profile.advice.map((item) => <p className="advice" key={item}><span>+</span>{item}</p>)}</div></div><p className="disclaimer">Educational interpretation only. Ayurveda is a holistic tradition; consult a qualified practitioner for personalised health guidance.</p></div> : <div className="empty-result"><span>◌</span><p>Awaiting your answers</p></div>}</section>
      <footer><span className="brand-mark">P</span><p><strong>prakruti</strong> · Indian Knowledge Systems studio</p><span>Built for learning, reflection, and better questions.</span></footer>
    </main>;
}
