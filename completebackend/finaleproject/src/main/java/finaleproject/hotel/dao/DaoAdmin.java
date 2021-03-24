package finaleproject.hotel.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import finaleproject.hotel.models.LoginAdmin;

@Repository
public interface DaoAdmin extends JpaRepository<LoginAdmin, String>
{
	
}
