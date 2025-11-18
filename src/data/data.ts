import { MapPin, Shield, Users, Zap, Clock, Building2, Star } from 'lucide-react';

export const driverData = [
  { id: 'DR001', name: 'Ahmed Benali', phone: '+213 555 123 456', vehicle: 'Motorcycle', rating: 4.8, status: 'Online', earnings: 'DZD 45,000' },
  { id: 'DR002', name: 'Farid Saidi', phone: '+213 555 234 567', vehicle: 'Van', rating: 4.9, status: 'On Delivery', earnings: 'DZD 52,300' },
  { id: 'DR003', name: 'Karim Meziane', phone: '+213 555 345 678', vehicle: 'Car', rating: 4.7, status: 'Online', earnings: 'DZD 38,900' },
  { id: 'DR004', name: 'Amir Lounis', phone: '+213 555 456 789', vehicle: 'Motorcycle', rating: 4.6, status: 'Offline', earnings: 'DZD 31,200' },
  { id: 'DR005', name: 'Yacine Hamdi', phone: '+213 555 567 890', vehicle: 'Truck', rating: 4.9, status: 'Online', earnings: 'DZD 67,500' },
  { id: 'DR006', name: 'Karim Boumediene', phone: '+213 555 678 901', vehicle: 'Car', rating: 4.8, status: 'On Delivery', earnings: 'DZD 41,800' },
];

export const services = [
  { icon: MapPin, title: 'Real-Time GPS Tracking', desc: 'Track every delivery with live location updates and ETA calculations' },
  { icon: Shield, title: 'Secure Cash-on-Delivery', desc: 'Safe payment handling with automated settlement workflows' },
  { icon: Users, title: 'Verified Driver Network', desc: 'Background-checked independent drivers at your service' },
  { icon: Zap, title: 'AI-Powered Matching', desc: 'Intelligent proximity-based driver assignment for faster delivery' },
  { icon: Clock, title: 'Same-Day Delivery', desc: 'Urgent deliveries completed within hours, or schedule for later' },
  { icon: Building2, title: 'Corporate API Solutions', desc: 'Enterprise-grade integration for business logistics needs' },
];

export const testimonials = [
  { name: 'Omar Boutique', role: 'E-commerce Store', text: 'Irara Express transformed our delivery operations. Real-time tracking keeps our customers happy!', rating: 5 },
  { name: 'Sarah Electronics', role: 'Electronics Retailer', text: 'Reliable, fast, and professional. The best delivery partner we\'ve worked with.', rating: 5 },
  { name: 'Mehdi - Driver', role: 'Independent Driver', text: 'Flexible hours, fair earnings, and great support. Perfect for my lifestyle.', rating: 5 },
];

export const howItWorksSteps = [
  { num: '1', title: 'Request Pickup', desc: 'Enter pickup and delivery details through our app or API' },
  { num: '2', title: 'Driver Assignment', desc: 'Nearby verified driver automatically assigned via AI matching' },
  { num: '3', title: 'Real-Time Tracking', desc: 'Track your delivery with live GPS and instant updates' },
  { num: '4', title: 'Secure Delivery', desc: 'Confirmation & payment with digital proof of delivery' },
];