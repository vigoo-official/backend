let baseEntity = {
    createdDate: { type: Date, default: Date.now, },
    updatedDate: { type: Date, default: null, },
}

module.exports = () => ({ ...baseEntity, })
