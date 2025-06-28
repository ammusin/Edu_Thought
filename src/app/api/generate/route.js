import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { topic, persona } = await req.json();

    const prompt = `Explain the topic "${topic}" as if you were a ${persona}. Use vocabulary, tone, and thinking patterns that reflect their worldview.`;

    // ✅ Hardcoded Groq key (Replace with your full working key)
      const liveKey = process.env.GROQ_API_KEY;

    // ✅ Log to verify key is being used (optional)
    console.log("✅ Using hardcoded API key:", liveKey.slice(0, 10) + '...');

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${liveKey}`,
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192', // ✅ Reliable free model
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    // ✅ Show full Groq response in terminal
    console.log("🧠 Groq full response:", JSON.stringify(data, null, 2));

    if (!data || !data.choices || !data.choices[0]) {
      return NextResponse.json({ result: '❌ Groq did not return a valid response.' });
    }

    return NextResponse.json({ result: data.choices[0].message.content });
  } catch (error) {
    console.error('❌ Groq API error:', error);
    return NextResponse.json({ result: '❌ Groq backend error.' });
  }
}
