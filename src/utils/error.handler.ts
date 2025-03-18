import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ZodError } from 'zod';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'خطای داخلی سرور رخ داده است.';

    // اگر خطا یک HttpException است، اطلاعات آن را دریافت کن
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const errorResponse = exception.getResponse() as
        | string
        | { message: string | string[] };
      message =
        typeof errorResponse === 'string'
          ? errorResponse
          : Array.isArray(errorResponse.message)
            ? errorResponse.message.join(', ')
            : errorResponse.message || message;
    }

    // اگر خطا از نوع Zod باشد، تمام پیام‌های آن را در قالب یک رشته برگردان
    else if (exception instanceof ZodError) {
      status = HttpStatus.BAD_REQUEST;
      message = exception.errors[0].message;
    }

    // در غیر این صورت، بررسی کن که آیا exception دارای message است، اگر بله، آن را نمایش بده
    else if (
      exception &&
      typeof exception === 'object' &&
      'message' in exception
    ) {
      message = (exception as { message: string }).message;
    }

    // لاگ گرفتن از خطا (در صورت نیاز)
    console.error('Exception:', exception);

    response.status(status).json({
      statusCode: status,
      success: false,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
