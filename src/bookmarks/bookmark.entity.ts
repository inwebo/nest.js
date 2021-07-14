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

    @Column()
    url: string;

    @Column()
    comment: string;

    @ManyToMany(() => Tag, tag => tag.$id)
    tags: Tag[];

}