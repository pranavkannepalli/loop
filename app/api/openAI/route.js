import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET(request) {
	try {
		const openai = new OpenAI();
		const completion = await openai.chat.completions.create({
			messages: [
				{ role: "system", content: "You are a helpful assistant." },
				{ role: "user", content: "Who won the world series in 2020?" },
				{ role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020." },
				{ role: "user", content: "Where was it played?" },
			],
			model: "gpt-3.5-turbo",
		});

		var complete = completion.choices[0];

		console.log(complete);
		return NextResponse.json({ message: complete }, { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Errored" }, { status: 400 });
	}
}
