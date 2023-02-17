package lk.ijse.service;

import lk.ijse.dto.AdminDTO;

import java.util.List;

public interface AdminService {
    void saveAdmin(AdminDTO adminDTO);

    void updateAdmin(AdminDTO adminDTO);

    void deleteAdmin(String code);

    List<AdminDTO> getAllAdmin();
}
