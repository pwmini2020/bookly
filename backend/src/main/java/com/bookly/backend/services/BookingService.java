package com.bookly.backend.services;

import com.bookly.backend.dao.BookingRepository;
import com.bookly.backend.models.Booking;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getBookingById(Long bookingId) {
        return bookingRepository.findById(bookingId);
    }

    public List<Booking> filterAllBookings(String isActive) {
        switch (isActive) {
            case "active":
                return bookingRepository.findAllByIsActiveEquals(true);
            case "inactive":
                return bookingRepository.findAllByIsActiveEquals(false);
            default:
                return new ArrayList<>();
        }
    }

    public Booking saveBooking(Booking newBooking) {
        return bookingRepository.save(newBooking);
    }

    public boolean deleteBookingById(Long bookingId) {
        if (bookingRepository.findById(bookingId).isPresent()) {
            bookingRepository.deleteById(bookingId);
            return true;
        } else {
            return false;
        }
    }
}
