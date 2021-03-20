package edacproject.finaleproject.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edacproject.finaleproject.models.LoginRec;

@Repository
public interface DaoRec extends JpaRepository<LoginRec, String>
{

}
