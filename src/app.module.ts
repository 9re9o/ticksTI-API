import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { RolesController } from './roles/roles.controller';
import { DepartmentsController } from './departments/departments.controller';
import { DepartmentsModule } from './departments/departments.module';
import { RolesModule } from './roles/roles.module';
import { SpecializationsModule } from './specializations/specializations.module';
import { UserSpecializationsModule } from './user-specializations/user-specializations.module';
import { CategoriesModule } from './categories/categories.module';
import { CategorySpecializationsModule } from './category-specializations/category-specializations.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { equipmentModule } from './equipment/equipment.module';
// import { EquipmentTypesModule } from './type-equipment/type-equipment.module';
import { ActionsModule } from './actions/actions.module';
import { TicketHistoryModule } from './ticket-history/ticket-history.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',

        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),

        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),

        autoLoadEntities: true,

        synchronize: true, // SOLO desarrollo

        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),

    TicketsModule,

    DepartmentsModule,

    RolesModule,

    UsersModule,

    SpecializationsModule,

    UserSpecializationsModule,

    CategoriesModule,

    CategorySpecializationsModule,

    RecommendationsModule,

    equipmentModule,

    // EquipmentTypesModule,

    ActionsModule,

    TicketHistoryModule,
  ],
  controllers: [UsersController, RolesController, DepartmentsController],
})
export class AppModule {}