package edacproject.finaleproject.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edacproject.finaleproject.models.LoginAdmin;

@Repository
public interface DaoAdmin extends JpaRepository<LoginAdmin, String>
{
	
}
