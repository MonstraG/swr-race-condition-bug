import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const response = await fetch("https://http.cat/200");
	res.send(await response.text());
}
