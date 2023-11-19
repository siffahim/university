/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express'
import config from '../../config'
import ApiError from '../../errors/ApiError'
import handleValidationError from '../../errors/handleValidationError'
import { IGenericErrorMessages } from '../../interfaces/error'
import { errorLogger } from '../../shared/logger'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  //log error here
  config.env === 'development'
    ? console.log('🚀 globalErrorHandler ~~ ', error)
    : errorLogger.error('🚀 globalErrorHandler ~~ ', error)

  let statusCode = 500
  let message = 'Something went wrong'
  let errorMessages: IGenericErrorMessages[] = []

  if (error?.name === 'ValidationError') {
    const simplified = handleValidationError(error)
    statusCode = simplified.statusCode
    message = simplified.message
    errorMessages = simplified.errorMessages
  } else if (error instanceof Error) {
    statusCode = 500
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof ApiError) {
    statusCode = 500
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
}

export default globalErrorHandler
