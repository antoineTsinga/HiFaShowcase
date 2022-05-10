package org.onyx.showcasebackend.Web.services;

import org.onyx.showcasebackend.dao.FashionCollectionRepository;
import org.onyx.showcasebackend.entities.FashionCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FashionCollectionService {

    @Autowired
    private FashionCollectionRepository fashionCollectionRepository;

    public List<FashionCollection> getFashionCollections(){
        List<FashionCollection> fashionCollections = new ArrayList<FashionCollection>();
        fashionCollectionRepository.findAll().forEach(fashionCollection -> fashionCollections.add(fashionCollection));
        return fashionCollections;
    }

    public FashionCollection getFashionCollectionsById(Long id){
        return fashionCollectionRepository.findById(id).get();
    }

    public void save(FashionCollection fashionCollection){
        fashionCollectionRepository.save(fashionCollection);
    }

    public void delete(Long id){
        fashionCollectionRepository.deleteById(id);
    }

    public void update(FashionCollection fashionCollection, Long id){
        fashionCollection.setId(id);
        fashionCollectionRepository.save(fashionCollection);
    }


}
