import {
  Calendar,
  Clock,
  User,
  FileText,
  SquarePen,
  Trash2,
} from 'lucide-react';
import EditModal from './EditModal';
import DeleteAlert from './DeleteAlart';

const MyBookingCard = ({ booking }) => {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-bold text-blue-600 mb-3">
        {booking.doctorName}
      </h2>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <User size={16} />
          <span>Patient: {booking.patientName}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>Date: {booking.date}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Time: {booking.time}</span>
        </div>

        <div className="flex items-start gap-2">
          <FileText size={16} className="mt-1 text-purple-500" />
          <span className="font-bold text-cyan-800">
            <span className="font-bold text-red-800">Reason:</span>{' '}
            {booking.reason ? booking.reason : 'No reason provided'}
          </span>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <EditModal booking={booking}></EditModal>

        <DeleteAlert booking={booking}></DeleteAlert>
      </div>
    </div>
  );
};

export default MyBookingCard;
