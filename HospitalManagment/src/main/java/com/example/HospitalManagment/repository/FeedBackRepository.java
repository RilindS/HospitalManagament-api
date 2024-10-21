package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.data.FeedBack.ViewFeedBack;
import com.example.HospitalManagment.entity.FeedBack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedBackRepository extends JpaRepository<FeedBack, Long> {

    @Query("select new com.example.HospitalManagment.data.FeedBack.ViewFeedBack(fb.comment, fb.rating, " +
            "n.id, n.firstName) " +
            "from FeedBack fb left join fb.nurse n")
    List<ViewFeedBack> getViewFeedBack();

}
