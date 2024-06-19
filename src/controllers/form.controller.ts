import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { asyncHandler } from '../utils/asyncHandler.ts';
import { ApiResponse } from '../utils/apiResponse.ts';
import { ApiError } from '../utils/apiError.ts';

const dbPath = path.resolve(__dirname, '../db/db.json');

const readDbFile = () => {
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data);
}

const writeDbFile = (data : any) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
}

export const ping = asyncHandler(async(req: Request, res: Response) => {
  res.json({ success: true });
})

export const submitForm = asyncHandler(async(req: Request, res: Response) => {
  let { name, email, phone, github_link, stopwatch_time } = req.body;
  if(!stopwatch_time) {
    stopwatch_time = new Date().toLocaleTimeString();
  }
  const id = uuidv4();

  const newSubmission = {
    id,
    name,
    email,
    phone,
    github_link,
    stopwatch_time
  };

  const submissions = await readDbFile();

  submissions.push(newSubmission);

  writeDbFile(submissions);

  res.json(new ApiResponse(201, newSubmission, 'Form submitted successfully'));
})

export const readForm = (req: Request, res: Response) => {
  const index = req.query.index;
  if (typeof index !== 'string') {
    throw new ApiError(404, 'Index parameter must be provided');
  }

  const idx = parseInt(index, 10);

  if (isNaN(idx) || idx < 0) {
    throw new ApiError(400, 'Index must be a valid non-negative integer');
  }

  const submissions = readDbFile();

  if (idx >= submissions.length) {
    throw new ApiError(404, 'Submission not found');
  }

  const submission = submissions[idx];
  res.status(200).json(new ApiResponse(200, submission, "Fetched submission successfully"));
};
