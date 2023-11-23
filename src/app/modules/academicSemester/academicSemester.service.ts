import ApiError from '../../../errors/ApiError';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterToDB = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  const academicSemester = await AcademicSemester.create(payload);

  if (!academicSemester) {
    throw new ApiError(400, 'Failed to create academic semester');
  }
  return academicSemester;
};

export const AcademicSemesterService = {
  createAcademicSemesterToDB,
};
