package com.LAB.LabSystem.Controller;

import com.LAB.LabSystem.Model.AppointmentScheduler;
import com.LAB.LabSystem.Service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/Appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/save/appointments")
   private String  saveAppointments(@RequestBody AppointmentScheduler appointmentScheduler)
    {
        appointmentService.saveAppointment(appointmentScheduler);
        return appointmentScheduler.getUserID();

    }
   @GetMapping(value = "/AllAppointments")
    private Iterable<AppointmentScheduler> getAllAppointments()
        {
            return appointmentService.listAll();
        }
    @DeleteMapping(value = "/DeleteAppointment/{UserID}")
    private void deleteAppointment(@PathVariable("UserID") String Userid){
        appointmentService.deleteAppointment(Userid);
    }
    @RequestMapping(value = "/Search/{UserID}")
    private AppointmentScheduler searchAppointment(@PathVariable("UserID") String Userid){
        return appointmentService.getAppointmentByUserid(Userid);
    }
}
