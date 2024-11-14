import React from 'react'
import styles from '../home.module.css';

const images = {
    image1: '/pheatmaplogmodel.png',
    image2: '/randomforest.png',
    image3: '/svm.png',
};

export function Home() {
    return (
        <section className={styles.largercontainer}>
            <section className={styles.textcontainer}>
                <h1 className={styles.toptext}>
                    Objective
                </h1>
                <h1 className={styles.text}>
                    Our objective was to analyze various factors to predict if Diabetes will occur in patients with the following criteria: Female, Indian Heritage, 21 or over.
                    We focused on the following data factors: Pregnancies, Glucose, Blood Pressure, Skin Thickness, Insulin, BMI, Diabetes Pedigree Function (DPF), and Age Outcome.

                </h1>
            </section>
            <section className={styles.container}>
                <h1 className={styles.text}>
                    The random forest model combines multiple decision trees to improve prediction accuracy and robustness. Each tree in the forest is trained on a random subset of the data. <br/>
                    Sensitivity (True Positive Rate): 83.2% <br/>
                    Specificity (True Negative Rate): 60.45% <br/>
                    Accuracy: 75.26%
                </h1>
                <div className={styles.imagecontainer}>
                    <img
                        src={images.image2}
                        alt="Image 1"
                        className={styles.image}
                    />
                </div>
            </section>
            <section className={styles.container}>
                <h1 className={styles.text}>
                The logarithmic model is used when there is a nonlinear relationship between the variables. It standardizes data in a way that can be approximately linear, allowing better prediction on the data to be made. <br/>
                Specificity (True Positive Rate): NA<br/>
                Sensitivity (True Negative Rate): 60.45% <br/>
                Accuracy: 60.45%
                </h1>
                <div className={styles.imagecontainer}>
                    <img
                        src={images.image1}
                        alt="Image 2"
                        className={styles.image}
                    />
                </div>
            </section>
            <section className={styles.container}>
                <h1 className={styles.text}>
                The Supper Vector Machine (SVM) model finds the best boundary that separates data points of different classes as clearly as possible in a way that maximizes the distance between classes. This allows the model to generalize new data. <br/>
                Specificity (True Positive Rate): 57.46%<br/>
                Sensitivity (True Negative Rate): NA<br/>
                Accuracy: 57.46%
                </h1>
                <div className={styles.imagecontainer}>
                    <img
                        src={images.image3}
                        alt="Image 3"
                        className={styles.image}
                    />
                </div>
            </section>
        </section>
        
        
    )
}