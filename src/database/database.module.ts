import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env" }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.getOrThrow<string>("DATASOURCE_HOST"),
        port: configService.getOrThrow<number>("DATASOURCE_PORT"),
        username: configService.getOrThrow<string>("DATASOURCE_USERNAME"),
        password: configService.getOrThrow<string>("DATASOURCE_PASSWORD"),
        database: configService.getOrThrow<string>("DATASOURCE_DATABASE"),
        synchronize: configService.getOrThrow<boolean>(
          "DATASOURCE_SYNCHRONIZE"
        ),
        entities: [],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
