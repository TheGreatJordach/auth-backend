import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RegistryDate } from "../common/embedded/registry-embedded";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  password: string;
  @Column({ unique: true })
  phone: string;
  @Column(() => RegistryDate, { prefix: false })
  registryDate: RegistryDate;
}
