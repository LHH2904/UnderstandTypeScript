/**
 * Dữ liệu đầu vào để tính toán đầu tư.
 */
type InvestmentData = {
    /** Số tiền đầu tư ban đầu */
    initialAmount: number;

    /** Số tiền đóng góp hàng năm */
    annualContribution: number;

    /** Tỷ lệ sinh lời kỳ vọng mỗi năm (ví dụ: 0.08 cho 8%) */
    expectedReturn: number;

    /** Số năm đầu tư */
    duration: number;
};

/**
 * Kết quả đầu tư cho từng năm.
 */
type InvestmentResult = {
    /** Năm hiện tại của chu kỳ đầu tư (ví dụ: "Year 1") */
    year: string;

    /** Tổng số tiền sau khi cộng lãi và đóng góp */
    totalAmount: number;

    /** Tổng số tiền bạn đã đóng góp cho đến năm đó */
    totalContribution: number;

    /** Tổng lãi đã kiếm được cho đến thời điểm đó */
    totalInterestEarned: number;
};

/**
 * Kết quả trả về của hàm tính toán, có thể là danh sách kết quả hoặc chuỗi lỗi.
 */
type CalculationResult = InvestmentResult[] | string;

/**
 * Hàm thực hiện tính toán đầu tư theo lãi suất kép và đóng góp hàng năm.
 *
 * @param data - Dữ liệu đầu tư từ người dùng
 * @returns Trả về danh sách kết quả từng năm hoặc thông báo lỗi nếu dữ liệu không hợp lệ
 */
function calculateInvestment(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;

    // Kiểm tra dữ liệu đầu vào
    if (initialAmount < 0) {
        return 'Initial investment amount must be at least zero';
    }

    if (duration <= 0) {
        return 'No valid amount of years provided';
    }

    if (expectedReturn < 0) {
        return 'Expected return must be at least zero';
    }

    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    const annualResults: InvestmentResult[] = [];

    // Vòng lặp tính toán kết quả cho từng năm
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn); // Áp dụng lãi suất cho tổng hiện tại
        totalInterestEarned = total - totalContribution - initialAmount; // Tính lãi
        totalContribution += annualContribution; // Cộng thêm phần đóng góp
        total += annualContribution; // Thêm đóng góp vào tổng

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContribution,
        });
    }

    return annualResults;
}

/**
 * Hàm in ra kết quả đầu tư hoặc thông báo lỗi.
 *
 * @param results - Kết quả từ hàm tính toán đầu tư
 */
function printResult(results: CalculationResult): void {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }

    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contribution: ${yearEndResult.totalContribution.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('----------------------------------------------------------');
    }
}

/**
 * Dữ liệu mẫu cho ví dụ tính toán đầu tư.
 */
const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};

// Gọi hàm tính toán và in ra kết quả
const result = calculateInvestment(investmentData);
printResult(result);

//Year 1
// Total: 5900
// Total Contribution: 500
// Total Interest Earned: 400
// ----------------------------------------------------------
// Year 2
// Total: 6892
// Total Contribution: 1000
// Total Interest Earned: 892