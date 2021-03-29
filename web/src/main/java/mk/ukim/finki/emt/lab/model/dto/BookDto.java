package mk.ukim.finki.emt.lab.model.dto;

import lombok.Data;
import mk.ukim.finki.emt.lab.model.Author;
import mk.ukim.finki.emt.lab.model.enumerations.Category;


@Data
public class BookDto {

    private String name;

    private Category category;

    public BookDto(String name, Category category, Long author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }

    private Long author;

    private Integer availableCopies;
}
