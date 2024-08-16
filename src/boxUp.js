export const draw = (detections, ctx) => {
    detections.forEach(prediction=>{
        // getting the predictions for each detection
        // on the webcam
        const [x, y, width, height] = prediction['bbox'];
        const text = prediction['class'];
        const score = Math.trunc(prediction['score'] * 100);
        
        // styling the box that the detection will be inside
        ctx.strokeStyle = "green"
        ctx.font = '24px Arial'
        ctx.fillStyle = 'green'

        // drawing the rectangle and adding text to classify
        // the detection

        ctx.beginPath()
        ctx.fillText(text + " " + score + "%", x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()

    })
}
