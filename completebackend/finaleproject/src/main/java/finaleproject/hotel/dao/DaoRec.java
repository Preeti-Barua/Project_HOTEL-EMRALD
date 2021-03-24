package finaleproject.hotel.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import finaleproject.hotel.models.LoginRec;

@Repository
public interface DaoRec extends JpaRepository<LoginRec, String>
{

}
