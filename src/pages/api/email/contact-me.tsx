import ENVIRONMENTS from 'config/environments';
import { methodNotAllowed } from 'lib/api';
import { NextApiHandler } from 'next';
import nodemailer from 'nodemailer';

const handler: NextApiHandler = (req, res) => {
  console.log({ body: req.body });
  if (!req.body?.email || !req.body?.name || !req.body?.message) {
    return res.status(400).json({ message: 'Form is incomplete' });
  }
  if (req.method !== 'POST') {
    return methodNotAllowed(res);
  }

  const message = {
    from: req.body.email,
    to: ENVIRONMENTS.EMAIL_ADDRESS,
    subject: 'Somebody wants to hire you!',
    text: req.body.message,
    html: `
    <div>
      <p>
        ${req.body.message}
      </p>
      <div> 
        <h2 style="font-weight: base; font-size: 0.8rem;">${req.body.name}</h2>
        <h4>${req.body.email}</h4>
      </div>
    </div>
    `,
  };

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: ENVIRONMENTS.EMAIL_APP_USERNAME,
      pass: ENVIRONMENTS.EMAIL_APP_PASSWORD,
    },
  });

  transporter.sendMail(message, (err, info) => {
    if (err) {
      return res.status(404).json({
        error: `Unable to connect to the mailing service: ${err.message}`,
      });
    }

    return res.status(200).json({
      success: `Message delivered to ${info.accepted}`,
    });
  });
};

export default handler;
