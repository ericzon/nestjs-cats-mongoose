import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
    @IsString()
    public name: string;
    @IsInt()
    public age: number;
    @IsString()
    public breed: string;
}
