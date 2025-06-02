// app/api/download-resume/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    // Path to your resume file in the public folder
    const filePath = path.join(
      process.cwd(),
      "public",
      "Amanuel_Daniel_Full_Stack.pdf"
    );
    const fileBuffer = await fs.readFile(filePath);

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set(
      "Content-Disposition",
      'attachment; filename="Amanuel_Daniel_Full_Stack_Resume.pdf"'
    );

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to download resume" },
      { status: 500 }
    );
  }
}
