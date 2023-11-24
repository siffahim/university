import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicSemester } = req.body;
    const result =
      await AcademicSemesterService.createAcademicSemesterToDB(
        academicSemester,
      );

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
  },
);

export const AcademicSemesterController = { createAcademicSemester };
