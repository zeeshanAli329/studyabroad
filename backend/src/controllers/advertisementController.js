const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/*
  GET /api/advertisements
  Public
  Returns only currently active ads.
*/
const getActiveAdvertisements = async (req, res) => {
  try {
    const now = new Date();

    const advertisements = await prisma.advertisement.findMany({
      where: {
        isActive: true,
        AND: [
          {
            OR: [
              { startDate: null },
              { startDate: { lte: now } },
            ],
          },
          {
            OR: [
              { endDate: null },
              { endDate: { gte: now } },
            ],
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      data: advertisements,
    });
  } catch (error) {
    console.error("Get active advertisements error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to load advertisements",
    });
  }
};


/*
  GET /api/advertisements/all
  Admin
  Returns all ads including inactive/expired.
*/
const getAllAdvertisements = async (req, res) => {
  try {
    const advertisements = await prisma.advertisement.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      data: advertisements,
    });
  } catch (error) {
    console.error("Get all advertisements error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to load advertisements",
    });
  }
};


/*
  POST /api/advertisements
  Admin
*/
const createAdvertisement = async (req, res) => {
  try {
    const {
      title,
      image,
      link,
      placement,
      isActive,
      startDate,
      endDate,
    } = req.body;

    if (!title || !image || !placement) {
      return res.status(400).json({
        success: false,
        error: "Title, image and placement are required",
      });
    }

    const advertisement = await prisma.advertisement.create({
      data: {
        title: title.trim(),
        image: image.trim(),
        link: link?.trim() || null,
        placement: placement.trim(),
        isActive:
          typeof isActive === "boolean"
            ? isActive
            : true,
        startDate: startDate
          ? new Date(startDate)
          : null,
        endDate: endDate
          ? new Date(endDate)
          : null,
      },
    });

    res.status(201).json({
      success: true,
      message: "Advertisement created successfully",
      data: advertisement,
    });
  } catch (error) {
    console.error("Create advertisement error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to create advertisement",
    });
  }
};


/*
  PUT /api/advertisements/:id
  Admin
*/
const updateAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      image,
      link,
      placement,
      isActive,
      startDate,
      endDate,
    } = req.body;

    const existingAdvertisement =
      await prisma.advertisement.findUnique({
        where: { id },
      });

    if (!existingAdvertisement) {
      return res.status(404).json({
        success: false,
        error: "Advertisement not found",
      });
    }

    const advertisement =
      await prisma.advertisement.update({
        where: { id },
        data: {
          title:
            title !== undefined
              ? title.trim()
              : existingAdvertisement.title,

          image:
            image !== undefined
              ? image.trim()
              : existingAdvertisement.image,

          link:
            link !== undefined
              ? link?.trim() || null
              : existingAdvertisement.link,

          placement:
            placement !== undefined
              ? placement.trim()
              : existingAdvertisement.placement,

          isActive:
            typeof isActive === "boolean"
              ? isActive
              : existingAdvertisement.isActive,

          startDate:
            startDate !== undefined
              ? startDate
                ? new Date(startDate)
                : null
              : existingAdvertisement.startDate,

          endDate:
            endDate !== undefined
              ? endDate
                ? new Date(endDate)
                : null
              : existingAdvertisement.endDate,
        },
      });

    res.json({
      success: true,
      message: "Advertisement updated successfully",
      data: advertisement,
    });
  } catch (error) {
    console.error("Update advertisement error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to update advertisement",
    });
  }
};


/*
  DELETE /api/advertisements/:id
  Admin
*/
const deleteAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;

    const existingAdvertisement =
      await prisma.advertisement.findUnique({
        where: { id },
      });

    if (!existingAdvertisement) {
      return res.status(404).json({
        success: false,
        error: "Advertisement not found",
      });
    }

    await prisma.advertisement.delete({
      where: { id },
    });

    res.json({
      success: true,
      message: "Advertisement deleted successfully",
    });
  } catch (error) {
    console.error("Delete advertisement error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to delete advertisement",
    });
  }
};


/*
  PUT /api/advertisements/:id/toggle
  Admin
*/
const toggleAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;

    const advertisement =
      await prisma.advertisement.findUnique({
        where: { id },
      });

    if (!advertisement) {
      return res.status(404).json({
        success: false,
        error: "Advertisement not found",
      });
    }

    const updated =
      await prisma.advertisement.update({
        where: { id },
        data: {
          isActive: !advertisement.isActive,
        },
      });

    res.json({
      success: true,
      message: updated.isActive
        ? "Advertisement activated"
        : "Advertisement deactivated",
      data: updated,
    });
  } catch (error) {
    console.error("Toggle advertisement error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to toggle advertisement",
    });
  }
};


module.exports = {
  getActiveAdvertisements,
  getAllAdvertisements,
  createAdvertisement,
  updateAdvertisement,
  deleteAdvertisement,
  toggleAdvertisement,
};