import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  GraduationCap,
  Building2,
  Star,
  Home,
} from "lucide-react";

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          style={{
            height: "16px",
            width: "16px",
            color:
              star <= rating
                ? "#FBBF24"
                : star - 0.5 <= rating
                ? "#FBBF24AA"
                : "#E5E7EB",
          }}
        />
      ))}
      <Typography
        variant="body2"
        style={{ marginLeft: "4px", color: "#4B5563" }}
      >
        {rating}
      </Typography>
    </div>
  );
}

function CollegeCard({ data }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pvt":
      case "private":
        return { backgroundColor: "#DBEAFE", color: "#1E40AF" };
      case "coed":
        return { backgroundColor: "#D1FAE5", color: "#065F46" };
      case "unaided":
        return { backgroundColor: "#FFEDD5", color: "#9A3412" };
      default:
        return { backgroundColor: "#F3F4F6", color: "#374151" };
    }
  };

  return (
    <Card
      style={{
        maxWidth: "400px",
        margin: "auto",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s",
        border: "none",
        background: "linear-gradient(to bottom right, #FFFFFF, #F9FAFB)",
      }}
    >
      <CardHeader
        title={
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <GraduationCap
                style={{ height: "20px", width: "20px", color: "#2563EB" }}
              />
              <Badge
                variant="outlined"
                style={{
                  fontSize: "12px",
                  fontFamily: "monospace",
                  border: "1px solid #E5E7EB",
                  padding: "2px 4px",
                }}
              >
                {data.instituteCode}
              </Badge>
              <Badge style={{ fontSize: "12px", padding: "4px 8px" }}>
                {data.region}
              </Badge>
            </div>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", color: "#111827" }}
            >
              {data.instituteName}
            </Typography>
            <StarRating rating={data.rating} />
          </div>
        }
        style={{ paddingBottom: "16px" }}
      />

      <CardContent style={{ padding: "16px" }}>
        {/* Address Section */}
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
          >
            <MapPin
              style={{
                height: "16px",
                width: "16px",
                color: "#6B7280",
                marginTop: "2px",
              }}
            />
            <div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${
                  data.instituteName.replace(" ", "+") +
                  data.addressLine1.replace(" ", "+") +
                  data.addressLine2.replace(" ", "+")
                }`}
                target="_blank"
              >
                <Typography variant="body2" style={{ color: "#2563EB" }}>
                  <span>{data.addressLine1}</span>
                  <br />
                  <span>{data.addressLine2}</span>
                  <br />
                  <span style={{ fontWeight: "500" }}>
                    {data.place}, {data.districtName} - {data.postalCode}
                  </span>
                </Typography>
              </a>
            </div>
          </div>
        </div>

        <Divider />

        {/* Contact Information */}
        <div style={{ margin: "16px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Phone
              style={{ height: "16px", width: "16px", color: "#6B7280" }}
            />
            <Typography variant="body2" style={{ color: "#4B5563" }}>
              {data.phoneNumber}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Mail style={{ height: "16px", width: "16px", color: "#6B7280" }} />
            <Typography variant="body2" style={{ color: "#4B5563" }}>
              {data.email}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Globe
              style={{ height: "16px", width: "16px", color: "#6B7280" }}
            />
            <Typography
              variant="body2"
              style={{
                color: "#2563EB",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              <a href={`https://${data.website}`} target="_blank">
                {data.website}
              </a>
            </Typography>
          </div>
        </div>
        <Divider />

        {/* College Details */}
        <div style={{ margin: "16px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Calendar
              style={{ height: "16px", width: "16px", color: "#6B7280" }}
            />
            <Typography variant="body2" style={{ color: "#4B5563" }}>
              Established {data.yearOfEstablishment}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Building2
              style={{ height: "16px", width: "16px", color: "#6B7280" }}
            />
            <Typography variant="body2" style={{ color: "#4B5563" }}>
              Affiliated to {data.affiliatedTo}
            </Typography>
          </div>
          {data.hostelAvailable !== "NIL" && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Home
                style={{ height: "16px", width: "16px", color: "#6B7280" }}
              />
              <Typography variant="body2" style={{ color: "#4B5563" }}>
                Hostel Available
              </Typography>
            </div>
          )}
        </div>

        <Divider />

        {/* Status Badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            margin: "16px 0px",
          }}
        >
          <Badge
            style={{ ...getStatusColor(data.collegeType), padding: "4px 8px" }}
          >
            {data.collegeType}
          </Badge>
          <Badge
            style={{
              ...getStatusColor(data.coEducationStatus),
              padding: "4px 8px",
            }}
          >
            {data.coEducationStatus}
          </Badge>
          <Badge
            style={{ ...getStatusColor(data.aidedStatus), padding: "4px 8px" }}
          >
            {data.aidedStatus}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default CollegeCard;
