import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import solutions from "../../solutions";

export async function POST(request) {
	try {
		var requestData = await request.json();

		var state = requestData["state"];
		var s = [];

		for (const element of solutions[state]) {
			s.push(element.title);
		}

		var query = requestData["query"];

		const openai = new OpenAI();
		const completion = await openai.chat.completions.create({
			messages: [
				{
					role: "system",
					content: `You are a helpful assistant whose job is to pick solutions that best match the user's query.  Only pick solutions from this list: ${s}. Only return applicable solutions. Include no other text and separate them by commas.`,
				},
				{ role: "user", content: query },
			],
			model: "gpt-3.5-turbo",
		});

		var complete = completion.choices[0]["message"]["content"];

		return NextResponse.json({ message: complete }, { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Errored" }, { status: 400 });
	}
}
