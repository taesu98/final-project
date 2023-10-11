package com.api.loginTest.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.loginTest.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long>{
	Optional<Member> findByEmail(String email);
    boolean existsByEmail(String email);
}
