package com.api.loginTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.loginTest.entity.Article;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
	Article findByTitle(String title);
}
