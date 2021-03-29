package mk.ukim.finki.emt.lab.service;

import mk.ukim.finki.emt.lab.model.enumerations.Category;

import java.util.List;

public interface CategoryService {
    List<Category> findAll();
}
