import { Card, CardContent, Typography } from "@mui/material";

function StatCard({ title, value, color }) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 4,
        borderLeft: `6px solid ${color}`,
      }}
    >
      <CardContent>

        <Typography
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {value}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default StatCard;