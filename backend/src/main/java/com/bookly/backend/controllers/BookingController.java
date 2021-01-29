package com.bookly.backend.controllers;

import com.bookly.backend.models.Booking;
import com.bookly.backend.services.BookingService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "Bookings Management")
@RestController
@RequestMapping("/v1")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("/bookings")
    @ApiOperation(value = "Fetches all the bookings with possibility to add a filter")
    @ApiImplicitParam(name = "Security-Token", paramType = "header", dataTypeClass = String.class)
    public ResponseEntity<List<Booking>> getBookings(@RequestParam(required = false) String filter) {
        List<Booking> responseBookingList;
        if (filter == null) {
            responseBookingList = bookingService.getAllBookings();
        } else {
            responseBookingList = bookingService.filterAllBookings(filter);
        }
        return new ResponseEntity<>(responseBookingList, HttpStatus.OK);
    }

    @GetMapping("/bookings/{id}")
    @ApiOperation(value = "Retrieves the booking with specified ID if one exists")
    @ApiImplicitParam(name = "Security-Token", paramType = "header", dataTypeClass = String.class)
    public ResponseEntity<Booking> getBookingById(@PathVariable(name = "id") Long bookingId) {
        return bookingService.getBookingById(bookingId)
                .map(booking  -> new ResponseEntity<>(booking, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/bookings")
    @ApiOperation(value = "Adds new booking to the database")
    @ApiImplicitParam(name = "Security-Token", paramType = "header", dataTypeClass = String.class)
    public ResponseEntity<Booking> addNewBooking(@RequestBody Booking newBooking) {
        return new ResponseEntity<>(bookingService.saveBooking(newBooking), HttpStatus.OK);
    }

    @PutMapping("/bookings/{id}")
    @ApiOperation(value = "Updates specific booking if one exists")
    @ApiImplicitParam(name = "Security-Token", paramType = "header", dataTypeClass = String.class)
    public ResponseEntity<Booking> updateBooking(@PathVariable(name = "id") Long bookingId,
                                                 @RequestBody Booking targetBooking) {
        return bookingService.getBookingById(bookingId)
                .map(booking  -> new ResponseEntity<>(bookingService.saveBooking(targetBooking), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/bookings/{id}")
    @ApiOperation(value = "Deletes specific booking from the database")
    @ApiImplicitParam(name = "Security-Token", paramType = "header", dataTypeClass = String.class)
    public ResponseEntity<String> deleteBooking(@PathVariable(name = "id") Long bookingId) {
        if (bookingService.deleteBookingById(bookingId)) {
            return new ResponseEntity<>("Booking deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
