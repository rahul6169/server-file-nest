import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Float,
  Parent,
} from '@nestjs/graphql';
import { Employee, employeeCount } from './employee.model';
import { EmployeeDto, FilterBySkill } from './employee.dto';
import { EmployeeService } from './employee.service';
import { Skill } from '../skills/skill.model';
import { Tag } from '../tags/tag.model';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}
  @Mutation(() => Employee)
  async createEmployee(
    @Args('createEmployee') createEmployee: EmployeeDto,
  ): Promise<Employee> {
    return await this.employeeService.createEmployee(createEmployee);
  }
  @Query(() => Employee)
  async getEmployee(@Args('id') id: string): Promise<Employee> {
    return await this.employeeService.getEmployee(id);
  }

  @Query(() => [Employee])
  async getAllEmployee(
    @Args('filter', { nullable: true }) filter: FilterBySkill,
  ): Promise<Employee[]> {
    return await this.employeeService.getAllEmployee(filter);
  }

  @ResolveField(() => Float)
  async age(@Parent() employee: Employee): Promise<number> {
    const dob = employee.dob;
    const currentDate = new Date();
    const birthDate = new Date(dob);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  }

  @Mutation(() => Employee)
  async updateEmployee(
    @Args('updateEmployee') updateEmployee: EmployeeDto,
    @Args('id') id: string,
  ): Promise<Employee> {
    return await this.employeeService.updateEmployee(updateEmployee, id);
  }
  @Mutation(() => Employee)
  async deleteEmployee(@Args('id') id: string): Promise<Employee> {
    return await this.employeeService.deleteEmployee(id);
  }

  @Query(() => Number)
  async getEmployeeCount(): Promise<Number> {
    return await this.employeeService.getEmployeeCount();
  }
  @Query(() => [Skill])
  async getTopSkillsWithCount(): Promise<Skill[]> {
    return await this.employeeService.getTopSkillsWithCount();
  }

  @Query(() => [Tag])
  async getTopTagWithCount(): Promise<Tag[]> {
    return await this.employeeService.getTopTagWithCount();
  }
}
