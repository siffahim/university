import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemester } = req.body;
    const result =
      await AcademicSemesterService.createAcademicSemesterToDB(
        academicSemester,
      );

    res.status(200).json({
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = { createAcademicSemester };
