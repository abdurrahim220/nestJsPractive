import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'create a new songs endpoint';
  }
  @Get()
  findAll() {
    return 'Find all songs endpoint';
  }
  @Get(':id')
  findOne() {
    return 'Find one songs endpoint';
  }
  @Put(':id')
  update() {
    return 'update songs endpoint';
  }
  @Delete(':id')
  delete() {
    return 'delete songs endpoint';
  }
}
