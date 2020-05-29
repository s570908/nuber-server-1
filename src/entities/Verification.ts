import { verificationTarget } from "src/types/types";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text", enum: ["EMAIL", "PHONE"] })
  target: verificationTarget;

  @Column({ type: "text" })
  payload: string;

  @Column({ type: "text" })
  key: string;

  @Column({ type: "boolean" })
  used: boolean;

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;
}

export default Verification;
