const prisma = require('../config/database');

const getSiteSettings = async (req, res) => {
  try {
    let settings = await prisma.siteSettings.findFirst();

    // Create default settings if none exist
    if (!settings) {
      settings = await prisma.siteSettings.create({
        data: {
          siteName: 'RouteX Study Abroad',
          notificationSoundEnabled: true,
          notificationTone: 'tone1',
          notificationVolume: 70
        }
      });
    }

    res.json(settings);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    res.status(500).json({ error: 'Failed to fetch site settings' });
  }
};

const updateSiteSettings = async (req, res) => {
  try {
    const {
      siteName,
      logo,
      favicon,
      contactEmail,
      phone,
      address,
      facebook,
      twitter,
      instagram,
      linkedin,
      whatsapp,
      footerText,
      defaultSeoTitle,
      defaultSeoDescription,
      notificationSoundEnabled,
      notificationTone,
      notificationVolume
    } = req.body;

    let settings = await prisma.siteSettings.findFirst();

    if (!settings) {
      // Create settings if none exist
      settings = await prisma.siteSettings.create({
        data: {
          siteName: siteName || 'RouteX Study Abroad',
          logo,
          favicon,
          contactEmail,
          phone,
          address,
          facebook,
          twitter,
          instagram,
          linkedin,
          whatsapp,
          footerText,
          defaultSeoTitle,
          defaultSeoDescription,
          notificationSoundEnabled: notificationSoundEnabled ?? true,
          notificationTone: notificationTone || 'tone1',
          notificationVolume: notificationVolume ?? 70
        }
      });
    } else {
      // Update existing settings
      settings = await prisma.siteSettings.update({
        where: { id: settings.id },
        data: {
          ...(siteName !== undefined && { siteName }),
          ...(logo !== undefined && { logo }),
          ...(favicon !== undefined && { favicon }),
          ...(contactEmail !== undefined && { contactEmail }),
          ...(phone !== undefined && { phone }),
          ...(address !== undefined && { address }),
          ...(facebook !== undefined && { facebook }),
          ...(twitter !== undefined && { twitter }),
          ...(instagram !== undefined && { instagram }),
          ...(linkedin !== undefined && { linkedin }),
          ...(whatsapp !== undefined && { whatsapp }),
          ...(footerText !== undefined && { footerText }),
          ...(defaultSeoTitle !== undefined && { defaultSeoTitle }),
          ...(defaultSeoDescription !== undefined && { defaultSeoDescription }),
          ...(notificationSoundEnabled !== undefined && { notificationSoundEnabled }),
          ...(notificationTone !== undefined && { notificationTone }),
          ...(notificationVolume !== undefined && { notificationVolume })
        }
      });
    }

    res.json(settings);
  } catch (error) {
    console.error('Error updating site settings:', error);
    res.status(500).json({ error: 'Failed to update site settings' });
  }
};

module.exports = {
  getSiteSettings,
  updateSiteSettings
};
