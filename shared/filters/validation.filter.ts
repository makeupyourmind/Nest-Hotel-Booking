import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import * as express from 'express';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter<BadRequestException> {
    public catch(exception, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse() as express.Response
        const status = exception.getStatus()

        response
            .status(status)
            .json({
                statusCode: status,
                error: exception.message.error || `Unprocessable Entity`,
                message: exception.message.message || exception.message,
            })
    }
}