# Nest.js Decorators Reference

Quick reference for the most common Nest.js decorators you'll use in this curriculum.

## Controller Decorators

### @Controller()
Defines a controller and its base route.

```typescript
@Controller('users')
export class UsersController {
  // Routes will be /users/*
}

@Controller('api/v1/users')
export class UsersController {
  // Routes will be /api/v1/users/*
}
```

## HTTP Method Decorators

### @Get()
Handle GET requests (retrieve data).

```typescript
@Get()
findAll() {
  // GET /users
  return this.usersService.findAll();
}

@Get(':id')
findOne(@Param('id') id: string) {
  // GET /users/123
  return this.usersService.findOne(+id);
}
```

### @Post()
Handle POST requests (create data).

```typescript
@Post()
create(@Body() createUserDto: CreateUserDto) {
  // POST /users
  return this.usersService.create(createUserDto);
}
```

### @Put()
Handle PUT requests (replace entire resource).

```typescript
@Put(':id')
replace(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  // PUT /users/123
  return this.usersService.replace(+id, updateUserDto);
}
```

### @Patch()
Handle PATCH requests (partial update).

```typescript
@Patch(':id')
update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  // PATCH /users/123
  return this.usersService.update(+id, updateUserDto);
}
```

### @Delete()
Handle DELETE requests (remove resource).

```typescript
@Delete(':id')
remove(@Param('id') id: string) {
  // DELETE /users/123
  return this.usersService.remove(+id);
}
```

## Parameter Decorators

### @Param()
Extract route parameters.

```typescript
@Get(':id')
findOne(@Param('id') id: string) {
  // URL: /users/123
  // id = '123'
}

@Get(':userId/posts/:postId')
getUserPost(
  @Param('userId') userId: string,
  @Param('postId') postId: string,
) {
  // URL: /users/5/posts/10
  // userId = '5', postId = '10'
}

@Get(':id')
findOne(@Param() params: any) {
  // Get all params as object
  // params = { id: '123' }
}
```

### @Body()
Extract request body.

```typescript
@Post()
create(@Body() createUserDto: CreateUserDto) {
  // Body: { "name": "John", "email": "john@example.com" }
  // createUserDto = { name: 'John', email: 'john@example.com' }
}

@Post()
create(@Body('name') name: string) {
  // Extract only the 'name' field from body
}
```

### @Query()
Extract query parameters.

```typescript
@Get()
findAll(@Query('role') role: string) {
  // URL: /users?role=admin
  // role = 'admin'
}

@Get()
findAll(@Query() query: any) {
  // URL: /users?role=admin&age=15
  // query = { role: 'admin', age: '15' }
}

@Get()
findAll(
  @Query('page') page: string = '1',
  @Query('limit') limit: string = '10',
) {
  // With default values
}
```

### @Headers()
Extract request headers.

```typescript
@Get()
findAll(@Headers('authorization') auth: string) {
  // Extract Authorization header
}

@Get()
findAll(@Headers() headers: any) {
  // Get all headers as object
}
```

### @Req()
Get the raw request object (use sparingly).

```typescript
import { Request } from 'express';

@Get()
findAll(@Req() request: Request) {
  console.log(request.url);
  console.log(request.method);
}
```

### @Res()
Get the raw response object (use sparingly).

```typescript
import { Response } from 'express';

@Get()
findAll(@Res() response: Response) {
  return response.status(200).json({ message: 'OK' });
}
```

## Status Code Decorators

### @HttpCode()
Set the response status code.

```typescript
@Post()
@HttpCode(201)
create(@Body() createUserDto: CreateUserDto) {
  // Returns 201 Created instead of default 200
}

@Delete(':id')
@HttpCode(204)
remove(@Param('id') id: string) {
  // Returns 204 No Content
}
```

## Dependency Injection Decorators

### @Injectable()
Marks a class as a provider that can be injected.

```typescript
@Injectable()
export class UsersService {
  // Can be injected into controllers or other services
}
```

### Constructor Injection
Inject services into classes.

```typescript
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // usersService is now available in all methods
}
```

## Module Decorators

### @Module()
Define a module with its components.

```typescript
@Module({
  imports: [DatabaseModule],      // Other modules to import
  controllers: [UsersController],  // Controllers in this module
  providers: [UsersService],       // Services/providers
  exports: [UsersService],         // Export for use in other modules
})
export class UsersModule {}
```

## Validation Decorators (class-validator)

Used in DTOs to validate incoming data.

```typescript
import { IsString, IsEmail, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @Min(0)
  @Max(150)
  @IsOptional()
  age?: number;
}
```

### Common Validation Decorators

| Decorator | Purpose | Example |
|-----------|---------|---------|
| `@IsString()` | Must be a string | `name: string` |
| `@IsNumber()` | Must be a number | `age: number` |
| `@IsInt()` | Must be an integer | `id: number` |
| `@IsBoolean()` | Must be boolean | `isActive: boolean` |
| `@IsEmail()` | Must be valid email | `email: string` |
| `@IsUrl()` | Must be valid URL | `website: string` |
| `@IsOptional()` | Field is optional | `age?: number` |
| `@Min(n)` | Minimum value | `age: number` |
| `@Max(n)` | Maximum value | `age: number` |
| `@Length(min, max)` | String length | `password: string` |
| `@IsArray()` | Must be an array | `tags: string[]` |
| `@IsEnum(enum)` | Must be enum value | `role: UserRole` |

## Swagger/OpenAPI Decorators

Document your API.

```typescript
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Returns all users' })
  findAll() {
    return this.usersService.findAll();
  }
}

// In DTOs
export class CreateUserDto {
  @ApiProperty({ description: 'User name', example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'User email', example: 'john@example.com' })
  @IsEmail()
  email: string;
}
```

## Complete Controller Example

```typescript
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users?role=admin&page=1
  @Get()
  findAll(
    @Query('role') role?: string,
    @Query('page') page: string = '1',
  ) {
    return this.usersService.findAll(role, +page);
  }

  // GET /users/123
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // POST /users
  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // PATCH /users/123
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  // DELETE /users/123
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
```

## Common Patterns

### Route Parameters with Validation
```typescript
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  // id is automatically converted to number and validated
}
```

### Multiple Parameters
```typescript
@Get(':userId/posts/:postId')
getUserPost(
  @Param('userId', ParseIntPipe) userId: number,
  @Param('postId', ParseIntPipe) postId: number,
) {
  return this.postsService.findUserPost(userId, postId);
}
```

### Query with Multiple Filters
```typescript
@Get()
findAll(
  @Query('role') role?: string,
  @Query('age') age?: string,
  @Query('page') page: string = '1',
  @Query('limit') limit: string = '10',
) {
  return this.usersService.findAll({
    role,
    age: age ? +age : undefined,
    page: +page,
    limit: +limit,
  });
}
```

### Partial Body Extraction
```typescript
@Post()
create(
  @Body('name') name: string,
  @Body('email') email: string,
) {
  return this.usersService.create({ name, email });
}
```

## Best Practices

1. **Use DTOs** for request bodies with validation decorators
2. **Be explicit** with return types and parameter types
3. **Use ParseIntPipe** when you need numeric IDs
4. **Keep controllers thin** - business logic in services
5. **Use appropriate HTTP codes** with @HttpCode()
6. **Document with Swagger** using @Api decorators
7. **Use @IsOptional()** for optional fields in DTOs
8. **Inject services** via constructor, not properties
9. **Use proper HTTP methods** - follow REST conventions
10. **Group related decorators** for readability

## Additional Resources

- [Nest.js Controllers Documentation](https://docs.nestjs.com/controllers)
- [Nest.js Providers Documentation](https://docs.nestjs.com/providers)
- [Class-validator Documentation](https://github.com/typestack/class-validator)
- [Nest.js OpenAPI Documentation](https://docs.nestjs.com/openapi/introduction)
