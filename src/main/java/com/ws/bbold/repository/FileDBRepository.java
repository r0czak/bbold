package com.ws.bbold.repository;

import com.ws.bbold.entities.FileDBEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileDBRepository extends JpaRepository<FileDBEntity, String> {
}