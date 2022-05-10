package org.onyx.showcasebackend.dao;

import org.onyx.showcasebackend.entities.FashionCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "fashion_collections", path = "fashion_collections")

public interface FashionCollectionRepository extends JpaRepository<FashionCollection, Long> {
}