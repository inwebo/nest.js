import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Bookmark } from './bookmark.entity';

@Entity({
    name: "bookmarks__tag"
})
  
export class Tag {
    @PrimaryGeneratedColumn()
    $id: number;
  
    @Column({
        unique: true,
    })
    name: string;

    @ManyToMany(() => Bookmark, bookmark => bookmark.$id)
    @JoinTable()
    bookmarks: Bookmark[];
}