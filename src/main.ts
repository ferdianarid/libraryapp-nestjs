import { NestFactory } from '@nestjs/core'
import { VersioningType } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger'
import { ExpressSwaggerCustomOptions } from 'interfaces/IExpressSwagger'
import { AppModule } from 'app.module'

async function bootstrap() {
	const NestApp = await NestFactory.create<NestExpressApplication>(AppModule);
	NestApp.enableVersioning({
		defaultVersion: "1",
		type: VersioningType.URI,
	});

	const ExSwaggerCustomOptions: ExpressSwaggerCustomOptions = {
		swaggerOptions: {},
		customSiteTitle: "Library Apps - APIs Swagger"
	}

	const SwaggerConfig = new DocumentBuilder()
		.setTitle("LibraryApps APIs")
		.setDescription("Application Programming Interface Documentation for Library Apps Services Backend")
		.setVersion("1.0.0")
		.addTag("Books API Documentations")
		.build()

	const SwaggerDocument = SwaggerModule.createDocument(NestApp, SwaggerConfig)

	SwaggerModule.setup("/apis", NestApp, SwaggerDocument, ExSwaggerCustomOptions)

	await NestApp.listen(8888)
}
bootstrap()
