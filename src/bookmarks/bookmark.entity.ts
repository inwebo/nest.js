import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Tag } from './tag.entity';

@Entity({
    name: "bookmarks__bookmark"
})
  
export class Bookmark {
    @PrimaryGeneratedColumn()
    $id: number;
  
    @Column({
        unique: true,
        length: 32,
    })
    md5: string;

    @Column({nullable: false})
    url: string;

    @Column({nullable: false})
    title: string;

    @Column({ type: 'datetime'})
    createdAt: Date;

    @Column({ type: 'datetime'})
    updatedAt: Date;

    @Column({nullable: true})
    description: string;

    @Column({nullable: false, default: true})
    isPublic: boolean;

    @Column({nullable: true})
    icon: string;

    @Column({nullable: true})
    iconUri: string;

    @ManyToMany(() => Tag, tag => tag.$id)
    tags: Tag[];
    
}